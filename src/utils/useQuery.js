import { useLocation } from 'react-router';

export default function useQuery(def) {
  return new URLSearchParams(useLocation().search) || def;
}
