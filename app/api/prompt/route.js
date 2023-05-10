import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

export const GET = async (request) => {
    try {
        await connectToDB();

        const prompt = await Prompt.find({}).populate('creator');

        return new Response(JASON.stringify(prompt), { status: 200 })
    
    } catch (error) {
        return new Response("Faild to fetch all prompts", {status: 500 })
        
    }
}