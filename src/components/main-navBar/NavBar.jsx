import React from 'react';
import { Button } from '../ui/button';
import { MoveRight } from 'lucide-react';


const NavBar = () => {
    return (
        <nav className='flex justify-between m-6 mt-3 items-center'>
            <img alt='Logo Ganesha Inovasi Teknologi' src='/test_logo.png' className='size-8'></img>
            <div className='flex justify-start gap-1'>
                <Button variant="link" className="font-medium text-primaryCustom-primaryCustom-600">Sign In</Button>
                <Button className="bg-primaryCustom-primaryCustom-500 rounded-lg font-medium">Sign Up Free<MoveRight className='ml-2' color="#ffffff" strokeWidth={1.5} /></Button>
            </div>
        </nav>
    );
}

export default NavBar;
