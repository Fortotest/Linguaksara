'use client';

import {useState, useRef} from 'react';
import {Button} from '@/components/ui/button';
import {Textarea} from '@/components/ui/textarea';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Loader2, Volume2} from 'lucide-react';
import {useToast} from '@/hooks/use-toast';
import {textToSpeech} from '@/ai/flows/text-to-speech';

export function PronunciationCoach() {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const {toast} = useToast();

  const handleListen = async () => {
    if (!text.trim()) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Silakan masukkan teks terlebih dahulu.',
      });
      return;
    }
    setIsLoading(true);
    try {
      const result = await textToSpeech({text});
      if (audioRef.current) {
        audioRef.current.src = result.audioDataUri;
        audioRef.current.play();
      }
    } catch (error) {
      console.error('Error generating speech:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Maaf, terjadi kesalahan saat membuat audio.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mt-8 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Volume2 className="h-6 w-6 text-primary" />
          Pelatih Pengucapan AI
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full gap-2">
          <Textarea
            placeholder="Ketik atau tempel kalimat apa pun di sini..."
            value={text}
            onChange={e => setText(e.target.value)}
            rows={3}
            disabled={isLoading}
          />
          <Button onClick={handleListen} disabled={isLoading || !text.trim()}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />{' '}
                Memproses...
              </>
            ) : (
              'Dengarkan'
            )}
          </Button>
          <audio ref={audioRef} className="hidden" />
          <p className="text-xs text-muted-foreground mt-2">
            Eksperimen dengan kalimat apa pun untuk melatih pendengaran Anda.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
