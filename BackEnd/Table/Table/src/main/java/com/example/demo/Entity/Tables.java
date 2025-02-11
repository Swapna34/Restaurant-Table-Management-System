package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
	
	@Entity
	@Table(name="Tablel")
	public class Tables {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name="t_id")
		private int t_id;
		
		@Column(name="capacity")
		private int capacity;
		
		@Column(name="status")
		private String status;
		
		@Column(name="b_time")
		private int b_time;
		
		@Column(name="table_no")
		private int table_no;

		public Tables() {
			super();
			// TODO Auto-generated constructor stub
		}

		public Tables(int t_id, int capacity, String status,int b_time,int table_no) {
			super();
			this.t_id = t_id;
			this.capacity = capacity;
			this.status = status;
			this.b_time=b_time;
			this.table_no=table_no;
		}

		public int getT_id() {
			return t_id;
		}

		public void setT_id(int t_id) {
			this.t_id = t_id;
		}

		public int getCapacity() {
			return capacity;
		}

		public void setCapacity(int capacity) {
			this.capacity = capacity;
		}

		public String getStatus() {
			return status;
		}

		public void setStatus(String status) {
			this.status = status;
		}
		public int getB_time() {
			return b_time;
		}

		public void setB_time(int b_time) {
			this.b_time = b_time;
		}

		public int getTable_no() {
			return table_no;
		}

		public void setTable_no(int table_no) {
			this.table_no = table_no;
		}

}
