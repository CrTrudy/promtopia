"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {

    const [copied, setCopied] = useState("");

    const handleCopy = () => {
        setCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(() => setCopied(""), 3000);
    };

    return (
        <div className='prompt_card'>
            <div className='flex justify-between items-start gap-5 courser-pointer'>
                <div className="flex-1 flex justify-start items-center gap-3 coursor-pointer">
                    <Image
                        src={post.creator.image}
                        alt='user_image'
                        width={40}
                        height={40}
                        className='rounded-full object-contain'
                    />
            <div className="flex flex-col">
                <h3 className='font-satishi font-semibold text-grey-900'>
                    {post.creator.username}
                </h3>
                <p className='font-iter text-sm text-grey-500'>
                    {post.creator.email}
                </p>
            </div>
            </div>
            <div 
                className="copy_btn"
                onClick={() => {handleCopy}}>
                    <Image
                        src={copied === post.prompt
                        ? '/public/assets/icons/tick.svg'
                        : '/public/assets/icons/copy.svg'
                        }
                        width={12}
                        height={12}
                    />
            </div>
        </div>
        <p className='my-4 font-satoshi text-sm text-grey-700'>
            {post.prompt}
        </p>
        <p className='font-iner text-sm blue_gradient coursor-pointer'
            onClick={()=>handleTagClick && handleTagClick(post.tag)}>
            {post.tag}
        </p>
    </div>
    )
}

export default PromptCard