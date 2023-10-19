/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserPostDto {
 @IsNotEmpty()
 @IsString()
 user_id:string;

 @IsString()
 description:string;

 @IsNotEmpty()
 @IsString()
 image:string;
}
