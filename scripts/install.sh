#!/bin/bash

configs=2
replicas=3
nodes=3

echo "Instantiating config directories"

config_counter=1
while [ $config_counter -le $configs ]
do
    echo "mongocfg${config_counter}"

    mkdir -p data/mongocfg${config_counter}
    ((config_counter++))
done


echo "Instantiating node directories"

replica_counter=1
while [ $replica_counter -le $replicas ]
do
    node_counter=1
    while [ $node_counter -le $nodes ]
    do
        echo "mongors${replica_counter}n${node_counter}"

        mkdir -p data/mongors${replica_counter}n${node_counter}
        ((node_counter++))
    done

    ((replica_counter++))

done
