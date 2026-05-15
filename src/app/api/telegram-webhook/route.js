import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const botToken = process.env.TELEGRAM_BOT_TOKEN;

    if (!body.message) return NextResponse.json({ ok: true });

    const chatId = body.message.chat.id;
    const text = body.message.text;

    if (text === '/start') {
      const welcomeText = `
👋 *Assalomu alaykum!*

Unio Doors - professional yashirin eshiklar tizimlariga xush kelibsiz.
Quyidagi tugmalar orqali biz bilan bog'lanishingiz yoki saytimizni ko'rishingiz mumkin:
      `;

      const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

      await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: welcomeText,
          parse_mode: 'Markdown',
          reply_markup: {
            inline_keyboard: [
              [
                { text: '🌐 Saytni ko\'rish', url: 'https://door-virid-iota.vercel.app/' }
              ],
              [
                { text: '📞 Bog\'lanish', callback_data: 'contact_us' },
                { text: '📁 Katalog', callback_data: 'catalog' }
              ]
            ]
          }
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Webhook Error:', error);
    return NextResponse.json({ ok: true }); // Always return 200 to Telegram
  }
}
