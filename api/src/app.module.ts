import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { RoomingListModule } from './rooming-list/rooming-list.module';
import { BookingModule } from './booking/booking.module';
import { RoomingListBookingModule } from './rooming-list-booking/rooming-list-booking.module';
import { RoomingList } from './rooming-list/entities/rooming-list.entity';
import { Booking } from './booking/entities/booking.entity';
import { RoomingListBooking } from './rooming-list-booking/entities/rooming-list-booking.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'db',
      port: 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true, // Automatically load entities
      synchronize: true, // Auto-sync DB schema (disable in production)
      entities: [RoomingList, Booking, RoomingListBooking],
    }),
    RoomingListModule,
    BookingModule,
    RoomingListBookingModule,
    JwtModule.register({
      secret: 'mysecret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
