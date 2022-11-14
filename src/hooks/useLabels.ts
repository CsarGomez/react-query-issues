import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../api/gitHubApi';
import { Label } from '../models/label';

const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi.get<Label[]>('/labels');
  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery(['labels'], getLabels, {
    // maintain the data fresh for 1 hour
    staleTime: 1000 * 60 * 60,
    // initial data, if its combined with the stale time it won't fetch new data
    // initialData: [
    //   {
    //     id: 717031390,
    //     node_id: 'MDU6TGFiZWw3MTcwMzEzOTA=',
    //     url: 'https://api.github.com/repos/facebook/react/labels/good%20first%20issue',
    //     name: 'good first issue',
    //     color: '6ce26a',
    //     default: true,
    //   },
    //   {
    //     id: 725156255,
    //     node_id: 'MDU6TGFiZWw3MjUxNTYyNTU=',
    //     url: 'https://api.github.com/repos/facebook/react/labels/good%20first%20issue%20(taken)',
    //     name: 'good first issue (taken)',
    //     color: 'b60205',
    //     default: false,
    //   },
    // ],

    // it will show this instead of a loader while is fetching the data
    placeholderData: [
      {
        id: 717031390,
        node_id: 'MDU6TGFiZWw3MTcwMzEzOTA=',
        url: 'https://api.github.com/repos/facebook/react/labels/good%20first%20issue',
        name: 'good first issue',
        color: '6ce26a',
        default: true,
      },
      {
        id: 725156255,
        node_id: 'MDU6TGFiZWw3MjUxNTYyNTU=',
        url: 'https://api.github.com/repos/facebook/react/labels/good%20first%20issue%20(taken)',
        name: 'good first issue (taken)',
        color: 'b60205',
        default: false,
      },
    ],
  });

  return labelsQuery;
};
