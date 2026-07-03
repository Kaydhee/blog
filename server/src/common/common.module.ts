import { Module } from '@nestjs/common';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [JwtStrategy],
  exports: [JwtStrategy],
})
export class CommonModule {}
