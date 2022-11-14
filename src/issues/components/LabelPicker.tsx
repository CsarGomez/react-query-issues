import { FC } from 'react';
import { useLabels } from '../../hooks/useLabels';
import { LaborPicker } from '../../models/LabelPicker';
import LoadingIcon from './LoadingIcon';

export const LabelPicker: FC<LaborPicker> = ({ selectedLabels, onChange }) => {
  const labelsQuery = useLabels();

  if (labelsQuery.isLoading) return <LoadingIcon />;

  return (
    <>
      {labelsQuery.data?.map((label) => (
        <span
          key={label.id}
          className={`badge rounded-pill m-1 label-picker ${selectedLabels.includes(label.name) ? 'label-active' : ''}`}
          style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
          onClick={() => onChange(label.name)}
        >
          {label.name}
        </span>
      ))}
    </>
  );
};
