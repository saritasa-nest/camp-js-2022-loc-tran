import { HTTPErrorDto } from '../dtos/httpError.dto';
import { HTTPError } from '../models/httpError';

export namespace HttpErrorMapper {

  /**
   * Maps httpError dto to model.
   * @param httpDto Http Error dto data.
   */
  export function fromDto(httpDto: HTTPErrorDto): HTTPError {
    const error = new HTTPError({
      code: httpDto.response.status,
      detail: httpDto.response.data.detail,
      data: httpDto.response.data.data,
    });
    return error;
  }
}
