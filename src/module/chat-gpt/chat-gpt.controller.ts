import { Controller, Post } from '@nestjs/common';
import { ChatGptService } from './chat-gpt.service';

@Controller('chat-gpt')
export class ChatGptController {
  constructor(private readonly chatGptService: ChatGptService) {}

  @Post()
  async handleAskQuestion() {
    return await this.chatGptService.handleAskQuestion(
      'What is the meaning of life?',
    );
  }
}
