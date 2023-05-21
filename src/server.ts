import { App } from '@/app';
import { ValidateEnv } from '@utils/validateEnv';
import { SurveyController } from '@controllers/survey.controller';

ValidateEnv();

const app = new App([SurveyController]);
app.listen();
