import { AnimeStatus, AnimeType } from '@js-camp/core/models/anime';
import { RatingType, SeasonType, SourceType } from '@js-camp/core/models/animeManagement';
import * as Yup from 'yup';

const RequiredErrorMessage = 'This field is required!';

export const ManagementSchema = Yup.object().shape({
  titleEnglish: Yup.string()
    .required(RequiredErrorMessage),
  aired: Yup.object().shape({
    start: Yup.date().required(RequiredErrorMessage),
    end: Yup.date().required(RequiredErrorMessage),
  }),
});

export const initialFormValues = {
  titleEnglish: '',
  titleJapanese: '',
  trailerYoutube: '',
  image: '',
  type: AnimeType.Tv,
  status: AnimeStatus.NotYetAired,
  source: SourceType.Unknown,
  rating: RatingType.Unknown,
  season: SeasonType.NonSeasonal,
  airing: false,
  synopsis: '',
  aired: {
    start: new Date(),
    end: new Date(),
  },
  genresData: [],
  studiosData: [],
};
