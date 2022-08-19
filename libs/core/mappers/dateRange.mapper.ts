import { DateRangeDto } from '../dtos/dateRange.dto';
import { DateRange } from '../models/dateRange';

export namespace DateRangeMapper {

  /**
   * Maps dto to model.
   * @param dto Date range dto.
   */
  export function fromDto(dto: DateRangeDto): DateRange {
    return {
      start: new Date(dto.start),
      end: new Date(dto.end),
    };
  }

  /**
   * Maps model to dto.
   * @param model Date range model.
   */
  export function toDto(model: DateRange): DateRangeDto {
    return {
      start: model.start.toISOString(),
      end: model.end.toISOString(),
    };
  }
}
