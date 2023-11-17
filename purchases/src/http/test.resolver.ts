import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../database/prisma/prisma.service';
import { UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from '../authorization/authorization.guard';

@Resolver()
export class TestResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => String)
  @UseGuards(AuthorizationGuard)
  teste() {
    return 'tested with success';
  }
}
