/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types";
import {IsNumber, IsString,IsOptional } from "class-validator";
import { CreateMovieDto } from "./create-movie.dto";


// ?: 필수가 아닌 클래스인것만 제외하면 Createmoviedto랑 같다.
export class UpdateMovieDto extends PartialType(CreateMovieDto){

  }
  