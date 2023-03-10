export function tempoParaSegundos(tempo: string) {
  const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(':');

  const horaEmSegundo = Number(horas) * 3600;
  const minutoEmSegundo = Number(minutos) * 60;
  return horaEmSegundo + minutoEmSegundo + Number(segundos)
}