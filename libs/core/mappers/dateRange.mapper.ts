import { DateRangeDto } from '../dtos/dateRange.dto';
import { DateRange } from '../models/dateRange';

export namespace DateRangeMapper {

  /**
   * @param dto Date range dto.
   */
  export function fromDto(dto: DateRangeDto): DateRange {
    return {
      start: new Date(dto.start),
      end: new Date(dto.end),
    };
  }
}
