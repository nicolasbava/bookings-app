import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { RoomingListModule } from './rooming-list/rooming-list.module';
import { BookingModule } from './booking/booking.module';
import { RoomingListBookingModule } from './rooming-list-booking/rooming-list-booking.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres', // example
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true, // Automatically load entities
      synchronize: true, // Auto-sync DB schema (disable in production)
    }),
    RoomingListModule,
    BookingModule,
    RoomingListBookingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
