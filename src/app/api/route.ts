
import { NextResponse } from "next/server";
import { Repository } from '../../database/models/repository';

export async function GET() {
    console.log(await Repository.findAll());
    return NextResponse.json('dsadasdas');
}