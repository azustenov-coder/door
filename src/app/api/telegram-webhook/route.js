import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const botToken = process.env.TELEGRAM_BOT_TOKEN;

    // Handle Callback Queries (Button clicks)
    if (body.callback_query) {
      const callbackData = body.callback_query.data;
      const chatId = body.callback_query.message.chat.id;
      const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

      if (callbackData === 'catalog') {
        await fetch(telegramUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: '📁 *Katalog bo\'limi*\n\nQuyidagi yo\'nalishlardan birini tanlang:',
            parse_mode: 'Markdown',
            reply_markup: {
              inline_keyboard: [
                [{ text: '🚪 Yashirin ochiladigan eshiklar', url: 'https://door-virid-iota.vercel.app/swing-doors' }],
                [{ text: '↔️ Surilma eshik tizimlari', url: 'https://door-virid-iota.vercel.app/sliding-doors' }],
                [{ text: '🛠 Aksessuarlar', url: 'https://door-virid-iota.vercel.app/accessories' }],
                [{ text: '🔙 Orqaga', callback_data: 'start' }]
              ]
            }
          }),
        });
      } else if (callbackData === 'contact_us') {
        await fetch(telegramUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: '📞 *Biz bilan bog\'lanish*\n\nTelefon: +998 90 123 45 67\nTelegram: @azizbek_door\n\nIsh vaqti: 09:00 - 18:00',
            parse_mode: 'Markdown'
          }),
        });
      } else if (callbackData === 'start') {
        // Redo the start message logic here or call it
      }
      return NextResponse.json({ ok: true });
    }

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
