import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, phone, message } = await request.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json({ error: 'Telegram credentials not configured' }, { status: 500 });
    }

    const text = `
🚀 *Yangi Buyurtma!*

👤 *Ism:* ${name}
📞 *Telefon:* ${phone}
💬 *Xabar:* ${message || 'Xabar qoldirilmagan'}

🌐 *Saytdan yuborildi:* ${new Date().toLocaleString()}
    `;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API Error:', errorData);
      return NextResponse.json({ error: 'Failed to send message to Telegram' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
