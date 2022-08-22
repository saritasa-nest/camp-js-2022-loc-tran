import { HttpErrorDto } from '../dtos/httpError.dto';
import { FormError } from '../models/httpError';

export namespace HttpErrorMapper {

  /**
   * Maps httpError dto to model.
   * @param httpDto Http Error dto data.
   */
  export function fromDto(httpDto: HttpErrorDto): FormError {
    return new FormError({
      detail: httpDto.detail,
      data: httpDto.data,
    });
  }
}
