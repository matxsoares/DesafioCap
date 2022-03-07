public class mediana {
    public static void main(String[] args) {

    Scanner scan = new Scanner(System.in);

    int comprimento, i=0, j=0, mediana, med, cont, v;

    System.out.printf("Insira o total de números: ");
    comprimento = Interger.parseInt(scan.nextLine);


    if(comprimento>0){

        for(i=0; i<comprimento ;i++){

        System.out.printf("Digite o valor: ");
        v[i] = Interger.parseInt(scan.nextLine);

        }
    }

    for(i=0; i<comprimento-1; i++){
            for(j=i+1; j<comprimento; j++){
                if(v[i] > v[j]){
                    med = v[i];
                    v[i] = v[j];
                    v[j] = med;
                }
            }
        }

        if(comprimento%2){
            mediana = v[comprimento/2];
        } else {
            mediana = (v[comprimento/2-1]+v[comprimento/2])/2;
        }
    System.out.printf("A mediana é %d: \n", mediana);
    }
}
