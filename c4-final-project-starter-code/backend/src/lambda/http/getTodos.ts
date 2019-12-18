import 'source-map-support/register'
import { getAllTodos } from '../../businessLogic/todos';
import * as middy from 'middy';
import { cors } from 'middy/middlewares';

import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'

const getTodosHandler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log('Processing event: ', event)
  const authorization = event.headers.Authorization
  const split = authorization.split(' ')
  const jwtToken = split[1]

  const todos = await getAllTodos(jwtToken)

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS 
    },
    body: JSON.stringify({
      items: todos
    })
  }
}

export const handler = middy(getTodosHandler).use(cors({ credentials: true }));