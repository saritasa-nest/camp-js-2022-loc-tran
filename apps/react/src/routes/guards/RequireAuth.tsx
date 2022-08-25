import { getAuthState } from '@js-camp/react/store/auth/dispatchers';
import { useAppDispatch } from '../../store';

const RequireAuthComponent: FC = () => {
  const dispatch = useAppDispatch();
  dispatch(getAuthState()).then();
}
