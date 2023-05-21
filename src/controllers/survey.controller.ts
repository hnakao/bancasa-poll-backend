import { SurveyDto } from '@/dtos/survey.dto';
import { WishContactDto } from '@/dtos/wishContact.dto';
import { SurveyEntity } from '@/entities/survey.entity';
import { SurveyService } from '@/services/survey.service';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, UseBefore } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { Container } from 'typedi';

@Controller()
export class SurveyController {
  public path = '/surveys';
  public surveyService = Container.get(SurveyService);

  @Get('/surveys')
  @OpenAPI({ summary: 'Return a list of surveys' })
  async getSurveys() {
    const surveys: SurveyEntity[] = await this.surveyService.findAllSurveys();
    return surveys;
  }

  @Get('/surveys/:id')
  @OpenAPI({ summary: 'Return a survey' })
  async getSurveyById(@Param('id') id: number) {
    const survey: SurveyEntity = await this.surveyService.findSurveyById(id);
    return survey;
  }

  @Post('/surveys')
  @HttpCode(201)
  @UseBefore(ValidationMiddleware(SurveyDto))
  @OpenAPI({ summary: 'Create a new survey' })
  async createSurvey(@Body() surveyDto: SurveyDto) {
    console.log('🚀 ~ createSurvey ~ surveyDto:', surveyDto);
    const survey: SurveyEntity = await this.surveyService.createSurvey(surveyDto);
    return survey;
  }

  @Patch('/surveys/wish-contact/:id')
  @UseBefore(ValidationMiddleware(WishContactDto))
  @OpenAPI({ summary: 'Update wish contact data' })
  async updateWishContact(@Param('id') id: number, @Body() dataDto: WishContactDto) {
    const survey: SurveyEntity = await this.surveyService.updateWishContact(id, dataDto);
    return survey;
  }

  @Put('/surveys/:id')
  @UseBefore(ValidationMiddleware(SurveyDto, true, true))
  @OpenAPI({ summary: 'Update a survey' })
  async updateSurvey(@Param('id') id: number, @Body() surveyDto: SurveyDto) {
    const survey: SurveyEntity = await this.surveyService.updateSurvey(id, surveyDto);
    return survey;
  }

  @Delete('/surveys/:id')
  @OpenAPI({ summary: 'Delete a survey' })
  async deleteSurvey(@Param('id') id: number) {
    const survey: SurveyEntity = await this.surveyService.deleteSurvey(id);
    return survey;
  }
}
