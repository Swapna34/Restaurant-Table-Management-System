using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MenuRestAPI.Models
{
    public partial class p07_tablebookingsystemContext : DbContext
    {
        public p07_tablebookingsystemContext()
        {
        }

        public p07_tablebookingsystemContext(DbContextOptions<p07_tablebookingsystemContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Booking> Bookings { get; set; } = null!;
        public virtual DbSet<Customer> Customers { get; set; } = null!;
        public virtual DbSet<Hotel> Hotels { get; set; } = null!;
        public virtual DbSet<Manager> Managers { get; set; } = null!;
        public virtual DbSet<MenuCategory> MenuCategories { get; set; } = null!;
        public virtual DbSet<MenuItem> MenuItems { get; set; } = null!;
        public virtual DbSet<Order> Orders { get; set; } = null!;
        public virtual DbSet<OrderDetail> OrderDetails { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<Tablel> Tablels { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=p07_tablebookingsystem", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.32-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Booking>(entity =>
            {
                entity.HasKey(e => e.BId)
                    .HasName("PRIMARY");

                entity.ToTable("booking");

                entity.HasIndex(e => e.CId, "cid_idx");

                entity.HasIndex(e => e.TId, "tid_idx");

                entity.Property(e => e.BId).HasColumnName("b_id");

                entity.Property(e => e.BDate).HasColumnName("b_date");

                entity.Property(e => e.BTime)
                    .HasMaxLength(45)
                    .HasColumnName("b_time");

                entity.Property(e => e.CId).HasColumnName("c_id");

                entity.Property(e => e.PreOrder).HasColumnName("pre_order");

                entity.Property(e => e.TId).HasColumnName("t_id");

                entity.HasOne(d => d.CIdNavigation)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.CId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("cid");

                entity.HasOne(d => d.TIdNavigation)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.TId)
                    .HasConstraintName("tid");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.CId)
                    .HasName("PRIMARY");

                entity.ToTable("customer");

                entity.HasIndex(e => e.UId, "cu_id_idx");

                entity.Property(e => e.CId).HasColumnName("c_id");

                entity.Property(e => e.Contact)
                    .HasMaxLength(45)
                    .HasColumnName("contact");

                entity.Property(e => e.Fname)
                    .HasMaxLength(255)
                    .HasColumnName("fname");

                entity.Property(e => e.Lname)
                    .HasMaxLength(255)
                    .HasColumnName("lname");

                entity.Property(e => e.UId).HasColumnName("u_id");

                entity.HasOne(d => d.UIdNavigation)
                    .WithMany(p => p.Customers)
                    .HasForeignKey(d => d.UId)
                    .HasConstraintName("cu_id");
            });

            modelBuilder.Entity<Hotel>(entity =>
            {
                entity.ToTable("hotel");

                entity.HasIndex(e => e.Id, "Id_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.Name, "Name_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Address).HasMaxLength(255);
            });

            modelBuilder.Entity<Manager>(entity =>
            {
                entity.HasKey(e => e.MId)
                    .HasName("PRIMARY");

                entity.ToTable("manager");

                entity.HasIndex(e => e.HId, "h_id_idx");

                entity.HasIndex(e => e.MId, "m_id_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.UId, "uid");

                entity.Property(e => e.MId).HasColumnName("m_id");

                entity.Property(e => e.Contact)
                    .HasMaxLength(255)
                    .HasColumnName("contact");

                entity.Property(e => e.Fname)
                    .HasMaxLength(255)
                    .HasColumnName("fname");

                entity.Property(e => e.HId).HasColumnName("h_id");

                entity.Property(e => e.IsActive)
                    .HasColumnType("bit(1)")
                    .HasColumnName("is_active");

                entity.Property(e => e.Lname)
                    .HasMaxLength(255)
                    .HasColumnName("lname");

                entity.Property(e => e.UId).HasColumnName("u_id");

                entity.HasOne(d => d.HIdNavigation)
                    .WithMany(p => p.Managers)
                    .HasForeignKey(d => d.HId)
                    .HasConstraintName("h_id");

                entity.HasOne(d => d.UIdNavigation)
                    .WithMany(p => p.Managers)
                    .HasForeignKey(d => d.UId)
                    .HasConstraintName("uid");
            });

            modelBuilder.Entity<MenuCategory>(entity =>
            {
                entity.HasKey(e => e.CatId)
                    .HasName("PRIMARY");

                entity.ToTable("menu_category");

                entity.Property(e => e.CatId).HasColumnName("cat_id");

                entity.Property(e => e.Descp)
                    .HasMaxLength(100)
                    .HasColumnName("descp");

                entity.Property(e => e.Name)
                    .HasMaxLength(45)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<MenuItem>(entity =>
            {
                entity.HasKey(e => e.ItemId)
                    .HasName("PRIMARY");

                entity.ToTable("menu_item");

                entity.HasIndex(e => e.CatId, "catid_idx");

                entity.Property(e => e.ItemId).HasColumnName("item_id");

                entity.Property(e => e.CatId).HasColumnName("cat_id");

                entity.Property(e => e.Descp)
                    .HasMaxLength(45)
                    .HasColumnName("descp");

                //entity.Property(e => e.Img)
                //    .HasColumnType("blob")
                //    .HasColumnName("img");

                entity.Property(e => e.Name)
                    .HasMaxLength(45)
                    .HasColumnName("name");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.HasOne(d => d.Cat)
                    .WithMany(p => p.MenuItems)
                    .HasForeignKey(d => d.CatId)
                    .HasConstraintName("catid");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.HasKey(e => e.OId)
                    .HasName("PRIMARY");

                entity.ToTable("order");

                entity.HasIndex(e => e.BId, "bid_idx");

                entity.Property(e => e.OId).HasColumnName("o_id");

                entity.Property(e => e.Amt).HasColumnName("amt");

                entity.Property(e => e.BId).HasColumnName("b_id");

                entity.HasOne(d => d.BIdNavigation)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.BId)
                    .HasConstraintName("bid");
            });

            modelBuilder.Entity<OrderDetail>(entity =>
            {
                entity.HasKey(e => e.OdId)
                    .HasName("PRIMARY");

                entity.ToTable("order_details");

                entity.HasIndex(e => e.ItemId, "itemid_idx");

                entity.HasIndex(e => e.OId, "oid_idx");

                entity.Property(e => e.OdId).HasColumnName("od_id");

                entity.Property(e => e.ItemId).HasColumnName("item_id");

                entity.Property(e => e.OId).HasColumnName("o_id");

                entity.Property(e => e.Qty).HasColumnName("qty");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.OrderDetails)
                    .HasForeignKey(d => d.ItemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("itemid");

                entity.HasOne(d => d.OIdNavigation)
                    .WithMany(p => p.OrderDetails)
                    .HasForeignKey(d => d.OId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("oid");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.HasKey(e => e.RId)
                    .HasName("PRIMARY");

                entity.ToTable("roles");

                entity.HasIndex(e => e.RId, "Id_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.Type, "Type_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.RId)
                    .ValueGeneratedNever()
                    .HasColumnName("r_id");

                entity.Property(e => e.Type).HasColumnName("type");
            });

            modelBuilder.Entity<Tablel>(entity =>
            {
                entity.HasKey(e => e.TId)
                    .HasName("PRIMARY");

                entity.ToTable("tablel");

                entity.Property(e => e.TId).HasColumnName("t_id");

                entity.Property(e => e.Capacity).HasColumnName("capacity");

                entity.Property(e => e.Status)
                    .HasMaxLength(45)
                    .HasColumnName("status");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.UId)
                    .HasName("PRIMARY");

                entity.ToTable("users");

                entity.HasIndex(e => e.Email, "email_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.RId, "r_id_idx");

                entity.Property(e => e.UId).HasColumnName("u_id");

                entity.Property(e => e.Email).HasColumnName("email");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");

                entity.Property(e => e.RId).HasColumnName("r_id");

                entity.HasOne(d => d.RIdNavigation)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.RId)
                    .HasConstraintName("r_id");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
