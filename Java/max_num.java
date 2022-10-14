class max
{
public static void main(String[] args)
{
	
		int x= Integer.parseInt(args[0]);
		int y = Integer.parseInt(args[1]);
        int z= Integer.parseInt(args[2]);
		
		System.out.println(" The numbers entered are: " + x + " " + y + " " + z);
		int max=x;
		if (max<y)
		{
		max=y;
		}
		if(max<z)
		{
		max=z;
		}
		System.out.println("Maximum no is :" + max);
}
}
