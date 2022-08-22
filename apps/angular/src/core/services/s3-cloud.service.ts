import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { S3ResponseDto } from '@js-camp/core/dtos/S3Reponse.dto';
import { S3UploadDto } from '@js-camp/core/dtos/S3Upload.dto';
import { map, Observable } from 'rxjs';
import { xml2js } from 'xml-js';

/** S3 upload. */
@Injectable({
  providedIn: 'root',
})
export class S3CloudService {
  public constructor(private readonly http: HttpClient) {}

  /**
   * Upload image to s3 cloud.
   * @param formData Upload data.
   * @param image Image file.
   */
  public upLoadImage(formData: S3UploadDto, image: File): Observable<string> {
    const uploadData = new FormData();
    for (const s3Key of Object.keys(formData)) {
      uploadData.append(s3Key, formData[s3Key as keyof S3UploadDto]);
    }
    uploadData.append('file', image);
    return this.http
      .post(formData.form_action, uploadData, { responseType: 'text' })
      .pipe(
        map(
          s3Response => xml2js(s3Response, { compact: true }) as S3ResponseDto,
        ),
        map(s3ResponseDto => s3ResponseDto.PostResponse.Location),
      );
  }
}
