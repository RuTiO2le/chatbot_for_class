import openai
import os

openai.api_key = os.environ["API_KEY"]

def get_completion(prompt, model="gpt-3.5-turbo"):
  messages = [{
    "role": "user",
    "content": prompt
  }]
  
  response = openai.chat.completions.create(
    model=model,
    messages=messages,
    temperature=.3,
  )
  
  return response.choices[0].message.content
