'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, {useEffect, useState} from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { InterviewType } from '@/services/Constants'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

function FormContainer({onHandleInputChange}) {
    const [interviewType, setInterviewType] = useState([])
    useEffect(() => {
        if(interviewType){
            onHandleInputChange('type', interviewType)
        }
    }, [interviewType])
    const AddInterviewType = (type) => {
        const data = interviewType.includes(type) 
        if(!data){
            setInterviewType((prev) => [...prev, type])
        } else{
            const result = interviewType.filter(item => item != type)
            setInterviewType(result)
        }
    }
  return (
    <div className='p-5 bg-white rounded-2xl'>
        <div>
            <h2 className='text-sm font-medium'>Job Position</h2>
            <Input placeholder='e.g. Full Stack Developer' className={'mt-2'}
                onChange={(e) => onHandleInputChange('position', e.target.value)}
            />
        </div>
        <div className='mt-5'>
            <h2 className='text-sm font-medium'>Job Description</h2>
            <Textarea placeholder='Enter job description' className={'mt-2 h-[200px]'}
                onChange={(e) => onHandleInputChange('description', e.target.value)}
            />
        </div>
        <div className='mt-5'>
            <h2 className='text-sm font-medium'>Interview Duration</h2>
            <Select onValueChange={(value) => onHandleInputChange('duration', value)}>
                <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder="Select Duration" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="5">5 Min</SelectItem>
                    <SelectItem value="15">15 Min</SelectItem>
                    <SelectItem value="30">30 Min</SelectItem>
                    <SelectItem value="45">45 Min</SelectItem>
                    <SelectItem value="60">60 Min</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className='mt-5'>
            <h2 className='text-sm font-medium'>Interview Type</h2>
            <div className='flex gap-3 flex-wrap mt-2'>
                {InterviewType.map((type, index) => (
                    <div key={index} className={`flex gap-2 p-1 px-4 items-center cursor-pointer
                     bg-white border border-gray-300 rounded-2xl
                     hover:bg-secondary
                     ${interviewType.includes(type.title)&&'bg-blue-100 text-primary'}`}
                     onClick={() => AddInterviewType(type.title)}>
                        <type.icon className='h-4 w-4'/>
                        <span>{type.title}</span>
                    </div>
                ))}
            </div>
        </div>
        <div className='mt-5 flex justify-end'>
            <Button>Genereate Question <ArrowRight/></Button>
        </div>
    </div>
  )
}

export default FormContainer