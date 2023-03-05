import { Module } from '@nestjs/common';
import { ChatGptModule } from './module/chat-gpt/chat-gpt.module';

@Module({
  imports: [ChatGptModule],
})
export class AppModule {}
