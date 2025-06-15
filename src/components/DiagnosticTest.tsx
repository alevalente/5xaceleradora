
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertTriangle } from 'lucide-react';

interface DiagnosticQuestion {
  id: string;
  question: string;
  painPoint: string;
}

interface DiagnosticTestProps {
  questions: DiagnosticQuestion[];
  onComplete: (score: number) => void;
  title?: string;
}

const DiagnosticTest = ({ questions, onComplete, title = "Teste Rápido de Diagnóstico" }: DiagnosticTestProps) => {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (questionId: string, answer: boolean) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const calculateScore = () => {
    const yesAnswers = Object.values(answers).filter(answer => answer).length;
    setIsCompleted(true);
    onComplete(yesAnswers);
    return yesAnswers;
  };

  const allAnswered = questions.every(q => answers[q.id] !== undefined);
  const score = isCompleted ? Object.values(answers).filter(answer => answer).length : 0;

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-6 text-center text-blue-900">{title}</h3>
        
        <div className="space-y-6">
          {questions.map((question, index) => (
            <div key={question.id} className="border-b border-gray-200 pb-4 last:border-b-0">
              <p className="text-lg mb-4 font-medium text-gray-800">
                {index + 1}. {question.question}
              </p>
              <div className="flex gap-4">
                <Button
                  variant={answers[question.id] === true ? "default" : "outline"}
                  onClick={() => handleAnswer(question.id, true)}
                  className="flex-1"
                >
                  Sim
                </Button>
                <Button
                  variant={answers[question.id] === false ? "default" : "outline"}
                  onClick={() => handleAnswer(question.id, false)}
                  className="flex-1"
                >
                  Não
                </Button>
              </div>
            </div>
          ))}
        </div>

        {allAnswered && !isCompleted && (
          <div className="mt-8 text-center">
            <Button onClick={calculateScore} size="lg" className="px-8">
              Ver Meu Resultado
            </Button>
          </div>
        )}

        {isCompleted && (
          <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-l-4 border-orange-400">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-orange-500 mr-3" />
              <h4 className="text-xl font-bold text-gray-800">Resultado do Diagnóstico</h4>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Você respondeu <strong className="text-orange-600">SIM para {score} de {questions.length} situações</strong>.
            </p>
            {score > 0 && (
              <p className="text-gray-600">
                Cada "SIM" representa uma oportunidade de otimização que pode estar custando tempo, dinheiro ou clientes para sua empresa.
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DiagnosticTest;
