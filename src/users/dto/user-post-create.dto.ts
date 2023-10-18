/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export class CreateUserPostDto {
 @IsNotEmpty()
 @IsString()
 user_id:string;

 @IsString()
 description:string;

 @IsNotEmpty()
 @IsObject()
 image:Buffer;
}
