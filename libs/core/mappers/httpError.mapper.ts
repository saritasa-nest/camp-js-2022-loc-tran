import { HttpErrorDto } from '../dtos/httpError.dto';
import { HttpError } from '../models/httpError';

export namespace HttpErrorMapper {

  /**
   * Maps httpError dto to model.
   * @param httpDto Http Error dto data.
   */
  export function fromDto(httpDto: HttpErrorDto): HttpError {
    return new HttpError({
      detail: httpDto.response.data.detail,
      data: httpDto.response.data.data,
    });
  }
}
