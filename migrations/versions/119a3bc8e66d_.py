"""empty message

Revision ID: 119a3bc8e66d
Revises: 8b38dce26e97
Create Date: 2024-07-25 03:33:01.900451

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '119a3bc8e66d'
down_revision = '8b38dce26e97'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('ingrediente',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=250), nullable=False),
    sa.Column('cantidad', sa.Float(), nullable=False),
    sa.Column('plato_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['plato_id'], ['plato.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('paso',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('numero_de_paso', sa.Integer(), nullable=True),
    sa.Column('description', sa.String(length=500), nullable=True),
    sa.Column('plato_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['plato_id'], ['plato.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('ingredientes')
    op.drop_table('pasos')
    with op.batch_alter_table('categoria', schema=None) as batch_op:
        batch_op.add_column(sa.Column('nombre', sa.String(length=250), nullable=True))
        batch_op.drop_column('platos')

    with op.batch_alter_table('informacion_nutritiva', schema=None) as batch_op:
        batch_op.add_column(sa.Column('plato_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(None, 'plato', ['plato_id'], ['id'])

    with op.batch_alter_table('plato', schema=None) as batch_op:
        batch_op.add_column(sa.Column('categoria_id', sa.Integer(), nullable=True))
        batch_op.alter_column('nombre',
               existing_type=sa.VARCHAR(length=50),
               type_=sa.String(length=250),
               existing_nullable=True)
        batch_op.create_foreign_key(None, 'categoria', ['categoria_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('plato', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.alter_column('nombre',
               existing_type=sa.String(length=250),
               type_=sa.VARCHAR(length=50),
               existing_nullable=True)
        batch_op.drop_column('categoria_id')

    with op.batch_alter_table('informacion_nutritiva', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('plato_id')

    with op.batch_alter_table('categoria', schema=None) as batch_op:
        batch_op.add_column(sa.Column('platos', sa.VARCHAR(length=50), autoincrement=False, nullable=True))
        batch_op.drop_column('nombre')

    op.create_table('pasos',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('description', sa.VARCHAR(length=50), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='pasos_pkey')
    )
    op.create_table('ingredientes',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('nombre', sa.VARCHAR(length=250), autoincrement=False, nullable=False),
    sa.Column('cantidad', postgresql.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='ingredientes_pkey')
    )
    op.drop_table('paso')
    op.drop_table('ingrediente')
    # ### end Alembic commands ###