import Navbar from '@/components/Navbar'
import PasswordInput from '@/components/PasswordInput'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardFooter, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className=''>
      <Navbar />
      <Card className='mx-auto max-w-sm mt-28 drop-shadow-lg'>
        <form onSubmit={() => { }}>
          <CardHeader className='text-2xl text-center'>
            Login
            <CardDescription className='mt-2 text-left'>Entre na sua conta para ter acesso as suas notas já criadas e criar ainda mais.</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <Label>Email</Label>
              <Input type="email" placeholder='Insira seu email' />
            </div>
            <PasswordInput />


            <Button type='submit' className='w-full'>Entrar</Button>
          </CardContent>
          <CardFooter>
            <p className='text-sm text-center w-full'>
              Ainda não tem conta?{" "}
              <Link to="/registro" className='font-medium text-primary underline'>Criar uma conta</Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default Login