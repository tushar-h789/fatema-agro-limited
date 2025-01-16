import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// সার্ভারলেস এনভায়রনমেন্টে PrismaClient সিঙ্গেল ইনস্ট্যান্স
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();
    
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'সকল তথ্য পূরণ করুন' }, 
        { status: 400 }
      );
    }
    
    const contactEntry = await prisma.contactForm.create({
      data: { name, email, subject, message }
    });
    
    return NextResponse.json({
      success: true,
      message: 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে',
      data: contactEntry
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'কিছু সমস্যা হয়েছে, অনুগ্রহ করে আবার চেষ্টা করুন' },
      { status: 500 }
    );
  }
}