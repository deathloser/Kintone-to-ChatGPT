// import {Button} from 'kintone-ui-component/lib/button'
// import util from 'common/util';
// import app_module from './app_module';
import '../css/desktop.css';
// import {header_util} from './header_util';
import constant from '../../common/constant';
import axios from 'axios';


import {Configuration, OpenAIApi} from 'openai';
import { gpt_util } from './gpt_util';

(() => {


  const apiKey = constant.openAI.apiKey;
  const organization = constant.openAI.organization;

  const configuration = new Configuration({
    organization: organization,
    apiKey: apiKey,
  });
  const openai = new OpenAIApi(configuration);


  kintone.events.on('app.record.index.show', async (event)=> {
    gpt_util.functionA();

    console.log('Here I am');
    console.log(openai);
    const client = axios.create({
      headers: {
        Authorization: 'Bearer ' + apiKey,
      },
    });

    const params = {
      prompt: 'How can I add?',
      model: 'ada:ft-personal-2023-05-25-15-11-30',
      max_tokens: 10,
      temperature: 0,
    };

    client
      .post('https://api.openai.com/v1/completions', params)
      .then((result) => {
        console.log(result.data.choices[0].text);
      })
      .catch((err) => {
        console.log(err);
      });

  });
}

)();
