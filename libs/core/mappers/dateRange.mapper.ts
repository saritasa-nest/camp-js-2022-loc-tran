import { DateRangeDto } from '../dtos/dateRange.dto';
import { DateRange } from '../models/dateRange';

export namespace DateRangeMapper {

  /**
   * Maps dto to model.
   * @param dto Date range dto.
   */
  export function fromDto(dto: DateRangeDto): DateRange {
    return {
      start: dto.start ? new Date(dto.start) : null,
      end: dto.end ? new Date(dto.end) : null,
    };
  }

  /**
   * Maps model to dto.
   * @param model Date range model.
   */
  export function toDto(model: DateRange): DateRangeDto {
    return {
      start: model.start ? model.start.toISOString() : null,
      end: model.end ? model.end.toISOString() : null,
    };
  }
}
