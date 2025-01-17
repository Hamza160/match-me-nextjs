"use client";
import { RegisterValidationSchema, registerValidationSchema } from '@/lib/validations/RegisterSchema';
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { GiPadlock } from 'react-icons/gi'
import * as z from 'zod';


const RegisterForm = () => {
    const {register, handleSubmit, formState:{isValid, errors}} = useForm<RegisterValidationSchema>({
        resolver:zodResolver(registerValidationSchema),
        mode:'onTouched'
    });

    const onSubmit = (data: RegisterValidationSchema) => {
        console.log(data);
    }

    return (
        <Card className='w-2/5 mx-auto'>
            <CardHeader className='flex flex-col items-center justify-center'>
                <div className='flex flex-col gap-2 items-center text-default'>
                    <div className='flex flex-row items-center gap-3'>
                        <GiPadlock size={30}/>
                        <h1 className='text-3xl font-semibold'>
                            Register
                        </h1>
                    </div>
                    <p className='text-nuetal-500'>
                        Welcome back to MactMe!
                    </p>
                </div>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-4'>
                        <Input
                            defaultValue=""
                            label="Name"
                            variant="bordered"
                            {...register('name')}
                            isInvalid={!!errors.name}
                            errorMessage={errors.name?.message as string}
                        />

                        <Input
                            defaultValue=""
                            label="Email"
                            variant="bordered"
                            {...register('email')}
                            isInvalid={!!errors.email}
                            errorMessage={errors.email?.message as string}
                        />
                        
                        <Input
                            defaultValue=""
                            label="Password"
                            variant="bordered"
                            type='password'
                            {...register('password')}
                            isInvalid={!!errors.password}
                            errorMessage={errors.password?.message as string}
                        />
                        
                        <Button
                            fullWidth
                            color="default"
                            type="submit"
                            isDisabled={!isValid}
                            >
                                Register
                        </Button>

                    </div>
                </form>
            </CardBody>
        </Card>
    );
}

export default RegisterForm