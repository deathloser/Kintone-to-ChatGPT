You have to install the python package into your terminal: to prepare your data

brew reinstall python@3.11
pip3 install openai
openai

Change headers to "prompt" and "completion"
Convert csv to jsonL:
openai tools fine_tunes.prepare_data --file Common\Kintone\Questions_20230524T165545-0400.csv


 To fix “Pandas required” error:
 pip install openai[datalib]
 Pip install pandas
 pip3 install pandas


Fine tune a model (ada is the cheapest):

export OPENAI_API_KEY=<apiKey>

openai api fine_tunes.create -t <myfile>.jsonl -m ada
 
“Stream disconnected” : pip install openai==0.25.0
We have to wait for around 1 hour for the model to be trained. (mine took 5-8 minutes)
 
openai api fine_tunes.list to see the status
openai api fine_tunes.get to see the status
 
 "fine_tuned_model": "ada:ft-MYORGANIZATION-DATE" …..
"status": "succeeded"

Finally, we can use it

USE A FINE TUNED MODEL:
In terminal:
openai api completions.create -m ada:ft-personal-2023-05-25-15-11-30 -p "How to delete?"

>How to delete? Click the plus button at the top right of the screen.

openai api completions.create -m ada:ft-personal-2023-05-25-15-11-30 -p "How to add?"
>How to add? Step 1 - at bottom of site, click download file

You need a few hundred records to get good responses (500 is recommended)
 
Check main.js to see how to ask questions with Node
