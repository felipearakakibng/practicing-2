import { Controller, Get } from '@nestjs/common';
import { MemberService } from './member.service';

@Controller()
export class MemberController {
  constructor(private readonly member: MemberService) {}

  @Get('hello')
  getHello(): string {
    return this.member.getHello();
  }
}
