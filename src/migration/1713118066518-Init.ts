import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1713118066518 implements MigrationInterface {
    name = 'Init1713118066518'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`account_type\` (\`id\` int NOT NULL AUTO_INCREMENT, \`value\` enum ('Gym Owner', 'Gynect Member') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`day\` (\`id\` int NOT NULL AUTO_INCREMENT, \`value\` enum ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`facility\` (\`id\` int NOT NULL AUTO_INCREMENT, \`value\` enum ('Free Weight Area', 'Weight Training Machines', 'Cardio Area', 'Sauna', 'Swimming Pool', 'Free Parking', 'Paid Parking', 'Free Wifi', 'Child-care facilities', 'Changing Room', 'Shower', 'EGYM', 'Phone Charging Station') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`gender\` (\`id\` int NOT NULL AUTO_INCREMENT, \`value\` enum ('Male', 'Female') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`gym\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`gym_type\` (\`id\` int NOT NULL AUTO_INCREMENT, \`value\` enum ('Fitness', 'Corssfit', 'HIIT', 'EMS', 'Yoga', 'Pilates', 'Boxing', 'Muay Thai', 'MMA', 'Spin', 'Climbing') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`subscription\` (\`id\` int NOT NULL AUTO_INCREMENT, \`value\` enum ('Basic', 'Premium', 'Not a member') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`subscription_interval\` (\`id\` int NOT NULL AUTO_INCREMENT, \`value\` enum ('Monthly', 'Yearly') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`subscription_status\` (\`id\` int NOT NULL AUTO_INCREMENT, \`value\` enum ('Active', 'Not active') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`gym_facilities_facility\` (\`gymId\` int NOT NULL, \`facilityId\` int NOT NULL, INDEX \`IDX_f5e27630906062520280508191\` (\`gymId\`), INDEX \`IDX_0cb236bd777b0b2978dc7c54cd\` (\`facilityId\`), PRIMARY KEY (\`gymId\`, \`facilityId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`gym_facilities_facility\` ADD CONSTRAINT \`FK_f5e276309060625202805081915\` FOREIGN KEY (\`gymId\`) REFERENCES \`gym\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`gym_facilities_facility\` ADD CONSTRAINT \`FK_0cb236bd777b0b2978dc7c54cd6\` FOREIGN KEY (\`facilityId\`) REFERENCES \`facility\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`gym_facilities_facility\` DROP FOREIGN KEY \`FK_0cb236bd777b0b2978dc7c54cd6\``);
        await queryRunner.query(`ALTER TABLE \`gym_facilities_facility\` DROP FOREIGN KEY \`FK_f5e276309060625202805081915\``);
        await queryRunner.query(`DROP INDEX \`IDX_0cb236bd777b0b2978dc7c54cd\` ON \`gym_facilities_facility\``);
        await queryRunner.query(`DROP INDEX \`IDX_f5e27630906062520280508191\` ON \`gym_facilities_facility\``);
        await queryRunner.query(`DROP TABLE \`gym_facilities_facility\``);
        await queryRunner.query(`DROP TABLE \`subscription_status\``);
        await queryRunner.query(`DROP TABLE \`subscription_interval\``);
        await queryRunner.query(`DROP TABLE \`subscription\``);
        await queryRunner.query(`DROP TABLE \`gym_type\``);
        await queryRunner.query(`DROP TABLE \`gym\``);
        await queryRunner.query(`DROP TABLE \`gender\``);
        await queryRunner.query(`DROP TABLE \`facility\``);
        await queryRunner.query(`DROP TABLE \`day\``);
        await queryRunner.query(`DROP TABLE \`account_type\``);
    }

}
