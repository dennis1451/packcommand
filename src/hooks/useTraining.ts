import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '../lib/api';
import type { TrainingSession } from '../types';

export function useTraining(userId: string) {
  const queryClient = useQueryClient();

  // Get training sessions
  const { data: sessions, isLoading } = useQuery({
    queryKey: ['trainingSessions', userId],
    queryFn: () => api.getTrainingSessions(userId)
  });

  // Save new training session
  const { mutate: saveSession } = useMutation({
    mutationFn: (session: Omit<TrainingSession, 'id'>) => 
      api.saveTrainingSession(session),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['trainingSessions', userId] });
    }
  });

  // Analyze video
  const { mutate: analyzeVideo, isLoading: isAnalyzing } = useMutation({
    mutationFn: api.analyzeTrainingVideo
  });

  return {
    sessions,
    isLoading,
    saveSession,
    analyzeVideo,
    isAnalyzing
  };
}