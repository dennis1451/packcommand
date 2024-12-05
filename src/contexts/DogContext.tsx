import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

interface Dog {
  id: string;
  name: string;
  breed: string;
  age: number;
  weight: number;
}

interface DogContextType {
  dogs: Dog[];
  loading: boolean;
  addDog: (dog: Omit<Dog, 'id'>) => Promise<void>;
  updateDog: (id: string, dog: Partial<Dog>) => Promise<void>;
  deleteDog: (id: string) => Promise<void>;
}

const DogContext = createContext<DogContextType | undefined>(undefined);

export function DogProvider({ children }: { children: React.ReactNode }) {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchDogs();
    }
  }, [user]);

  async function fetchDogs() {
    try {
      const { data, error } = await supabase
        .from('dogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setDogs(data || []);
    } catch (error) {
      console.error('Error fetching dogs:', error);
    } finally {
      setLoading(false);
    }
  }

  async function addDog(dog: Omit<Dog, 'id'>) {
    try {
      const { error } = await supabase
        .from('dogs')
        .insert([dog]);

      if (error) throw error;
      await fetchDogs();
    } catch (error) {
      console.error('Error adding dog:', error);
      throw error;
    }
  }

  async function updateDog(id: string, dog: Partial<Dog>) {
    try {
      const { error } = await supabase
        .from('dogs')
        .update(dog)
        .eq('id', id);

      if (error) throw error;
      await fetchDogs();
    } catch (error) {
      console.error('Error updating dog:', error);
      throw error;
    }
  }

  async function deleteDog(id: string) {
    try {
      const { error } = await supabase
        .from('dogs')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchDogs();
    } catch (error) {
      console.error('Error deleting dog:', error);
      throw error;
    }
  }

  return (
    <DogContext.Provider value={{ dogs, loading, addDog, updateDog, deleteDog }}>
      {children}
    </DogContext.Provider>
  );
}

export function useDogs() {
  const context = useContext(DogContext);
  if (context === undefined) {
    throw new Error('useDogs must be used within a DogProvider');
  }
  return context;
}