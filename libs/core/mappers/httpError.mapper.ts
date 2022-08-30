import { HttpErrorDto } from '../dtos/httpError.dto';
import { DataError, FormError } from '../models/httpError';

export namespace HttpErrorMapper {

  /**
   * Maps httpError dto to model.
   * @param httpDto Http Error dto data.
   */
  export function fromDto(httpDto: HttpErrorDto): FormError {
    let dataError: DataError = {};
    for (const key of Object.keys(httpDto.data)) {
      dataError = {
        ...dataError,
        [key]: httpDto.data[key].join(''),
      };
    }
    return new FormError({
      detail: httpDto.detail,
      data: dataError,
    });
  }
}
