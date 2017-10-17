import csv

#file with the flood data
data_file = open('data/flood_severity_by_occurrence.csv','rb')

#file where data results will go
output_file = open('output_file.txt', 'w')

#temp storage for data between data file and output file
data_to_array = []

reader = csv.reader(data_file)

for line in reader:
    data_to_array.append(line)

data_file.close()


#create an iterator
iter_data = iter(data_to_array)

#skip the first value in the array where the data was stored (the header row)
next(iter_data)

#iterate through the results and write them to the output file
for data_object in iter_data:
    result = "There were "+ str(data_object[1]) + " occurrences of event with severity "+ str(data_object[0])+ ".\n" 
    output_file.write(result)
    
output_file.close()
