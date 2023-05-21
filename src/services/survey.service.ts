import { AppDataSource } from '@/database';
import { SurveyDto } from '@/dtos/survey.dto';
import { WishContactDto } from '@/dtos/wishContact.dto';
import { SurveyEntity } from '@/entities/survey.entity';
import { HttpException } from '@exceptions/httpException';
import { Service } from 'typedi';
import { Repository } from 'typeorm';

@Service()
export class SurveyService {
  surveyRepository: Repository<SurveyEntity>;

  constructor() {
    this.surveyRepository = AppDataSource.getRepository(SurveyEntity);
  }

  public async findAllSurveys(): Promise<SurveyEntity[]> {
    const surveys: SurveyEntity[] = await this.surveyRepository.find();
    return surveys;
  }

  public async findSurveyById(id: number): Promise<SurveyEntity> {
    const survey: SurveyEntity = await this.surveyRepository.findOne({ where: { id } });
    if (!survey) throw new HttpException(404, 'Survey not found');

    return survey;
  }

  public async createSurvey(surveyDto: SurveyDto): Promise<SurveyEntity> {
    console.log('🚀 ~ createSurvey ~ surveyDto:', surveyDto);
    const survey: SurveyEntity = await this.surveyRepository.save(this.surveyRepository.create(surveyDto));

    return survey;
  }

  public async updateSurvey(id: number, surveyDto: SurveyDto): Promise<SurveyEntity> {
    const survey: SurveyEntity = await this.findSurveyById(id);

    for (const field of Object.keys(surveyDto)) {
      survey[field] = surveyDto[field];
    }
    return this.surveyRepository.save(survey);
  }

  public async updateWishContact(id: number, dataDto: WishContactDto): Promise<SurveyEntity> {
    const survey: SurveyEntity = await this.findSurveyById(id);

    survey.wishContact = dataDto.wishContact;
    return this.surveyRepository.save(survey);
  }

  public async deleteSurvey(id: number): Promise<SurveyEntity> {
    const survey: SurveyEntity = await this.findSurveyById(id);
    return this.surveyRepository.remove(survey);
  }
}
